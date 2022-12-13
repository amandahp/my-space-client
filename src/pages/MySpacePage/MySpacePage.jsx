import { useEffect, useState } from "react";
import { Header } from "../../components";
import * as S from "./MySpace.styles";
import { useSelector } from "react-redux";
import axios from "axios";
import Board from 'react-trello';
import { useCookies } from "react-cookie";

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
        return {id:v.title.split('$')[1], title:v.title.split('$')[0],cards:v.cards?.map((c) => {
          return {
            id:c.title.split('$')[1], title:c.title.split('$')[0],description:c.content, label:''
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
      await axios.post(`${process.env.REACT_APP_API}/cards`, payload, { headers:{
        'Authorization':`Bearer ${cookie.token}`
      }});
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
      await axios.post(`${process.env.REACT_APP_API}/cards`, payload, { headers:{
        'Authorization':`Bearer ${cookie.token}`
      }});
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    fetchColumns()
  },[])

  return (
    <>
      <Header />
      <S.Main>
        <Board
        canAddLanes
        onLaneAdd={(params) => onClickNewColumn(params)}
        editable
        onCardAdd={(card, laneId) => onClickNewCard(card, laneId)}
        data={columns}
        draggable

        />
      </S.Main>
    </>
  );
};
