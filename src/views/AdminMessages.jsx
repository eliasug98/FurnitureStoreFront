import React from 'react'
import AdminChat from '../components/AdminChat'
import useFurniture from '../hooks/useFurniture'
import { useEffect } from 'react';

export default function AdminMessages() {

  const { handleGetAllUsers } = useFurniture();

  useEffect(() => {
    handleGetAllUsers();
  }, [])

  return (
    <div>
      <AdminChat/>
    </div>
  )
}
