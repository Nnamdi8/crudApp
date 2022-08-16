import React, {useEffect, useState} from 'react'
import Form from './components/Form';
import {useDispatch } from 'react-redux';
import { getPost } from './_actions/posts';

function App() {

  const dispatch = useDispatch();
  const [id, setId] = useState(0)
  useEffect(() =>{
    dispatch(getPost);
  }, [dispatch])

  return (
    <>
    <Form setId={setId} getId={id}/>
    <Posts setId={setId}/>
    </>
  );
}

export default App;