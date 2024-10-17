import React from 'react'
import UserChat from '../components/UserChat'
import { useAuth } from '../hooks/useAuth';
import useFurniture from '../hooks/useFurniture';
import { useEffect } from 'react';

export default function UserMessages() {

  const {user} = useAuth({ middleware: 'auth' });
  const {markMessagesAsRead, getUserMessages, userMessages} = useFurniture();

  useEffect(() => {
    async function fetchData() {
      const data = await getUserMessages(user.id);
      
      if(data) {
        const unreadMessagesCount = data.filter(message => !message.isRead && message.adminId != 0); 
        if(unreadMessagesCount) {
          await markMessagesAsRead(unreadMessagesCount[0].userId);
        }
      }
    }
    fetchData();
  }, [user]);

  return (
    <div>
      <UserChat/>
    </div>
  )
}
