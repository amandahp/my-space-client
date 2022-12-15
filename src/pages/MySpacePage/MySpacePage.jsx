import { useEffect, useState } from "react";
import { Header } from "../../components";
import * as S from "./MySpace.styles";
import { useSelector } from "react-redux";
import axios from "axios";
import Board from 'react-trello';
import { useCookies } from "react-cookie";
import React from 'react'


export const MySpacePage = () => {
  const {userId} = useSelector(state => state.userReducer)
  const [columns, setColumns] = useState({lanes:[]})
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  const fetchColumns = async() => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/columns`,{ headers:{
        'Authorization':`Bearer ${cookie.token}`,
        userId
      }})
      const {data} = response
      const formattedData = data?.data?.map((v) => {
        return {id:v.title.split('$')[1], title:v.title.split('$')[0],cards:v.cards?.map((c,index) => {
          return {
            id:c.title.split('$')[1], title:c.title.split('$')[0],description:c.content, realId:c._id
          }
        }), realId:v._id}
      })

      setColumns({lanes:formattedData})
      console.log(response)
    }catch(e) {
      console.log(e)
    }
  }

  const onClickNewColumn = async(val) => {
    try {
      const payload = {
        title:`${val.title}$${val.id}`,
        userId,
        order:columns.lanes.length + 1

      }
      await axios.post(`${process.env.REACT_APP_API}/columns`, payload, { headers:{
        'Authorization':`Bearer ${cookie.token}`
      }});
      fetchColumns()
    }catch(e) {
      console.log(e)
    }
  }

  const onClickNewCard = async(card, laneId) => {
    try {
      console.log(columns.lanes.filter((p) => p.id === laneId))
      const columnId = columns.lanes.filter((v) => v.id ===laneId)[0].realId
      const payload = {
        title:`${card.title}$${card.id}`,
        content:card.description,
        order:1,
        column:columnId
      }
      await axios.post(`${process.env.REACT_APP_API}/cards`, payload, { headers:{
        'Authorization':`Bearer ${cookie.token}`
      }});
    }catch(e){
      console.log(e)
    }
  }

  const onDeleteCard = async (cardId, laneId) => {
    const column = columns.lanes.filter((c) => c.id === laneId)[0]
    const cardToBeDeleted = column.cards.filter((c) => c.id === cardId)[0]
    try {
      await axios.delete(`${process.env.REACT_APP_API}/cards/${cardToBeDeleted.realId}`,{ headers:{
        'Authorization':`Bearer ${cookie.token}`
      }})
    }catch(e) {
      console.log(e)
    }
  }

  const deleteLane = async(laneId) => {
    const column = columns.lanes.filter((c) => c.id === laneId)[0]
    try {
      await axios.delete(`${process.env.REACT_APP_API}/columns/${column.realId}`, { headers:{
        'Authorization':`Bearer ${cookie.token}`
      }})
    }catch(e) {
      console.log(e)
    }
  }

  const dragCard = async (from,to,cardId) => {
    const column = columns.lanes.filter((c) => c.id === from)[0]
    const newColumn = columns.lanes.filter((c) => c.id === to)[0]
    const cardBeingDragged = column.cards.filter((c) => c.id === cardId)[0]
    const payload = {
      title:`${cardBeingDragged.title}$${cardBeingDragged.id}`,
      content:cardBeingDragged.description,
      order:1,
      column:newColumn.realId
    }
    try {
      await axios.put(`${process.env.REACT_APP_API}/cards/${cardBeingDragged.realId}`,{...payload},{ headers:{
        'Authorization':`Bearer ${cookie.token}`
      }})
    }catch(e) {
      console.log(e)
    }


  }

  console.log(columns)



  useEffect(() => {
    fetchColumns()
  },[])

  return (
    <>
      <Header />
      <S.Main>
        <Board
        laneDraggable={false}
        canAddLanes
        onLaneAdd={(params) => onClickNewColumn(params)}
        editable
        onCardAdd={(card, laneId) => onClickNewCard(card, laneId)}
        data={columns}
        onCardDelete={(cardId, laneId) => onDeleteCard(cardId, laneId)}
        onLaneDelete={(laneId) =>deleteLane(laneId)}
        onCardMoveAcrossLanes={(fromLaneId, toLaneId,cardId) => dragCard(fromLaneId, toLaneId, cardId)}
        />
      </S.Main>
    </>
  );
};
