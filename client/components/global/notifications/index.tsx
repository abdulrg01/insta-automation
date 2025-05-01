import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'
import React from 'react'

type Props = {}

const Notifications = (props: Props) => {
  return (
    <Button className='bg-white rounded-full py-4'>
        <Bell color="#3352CC" fill="#3352CC" />
    </Button>
  )
}

export default Notifications