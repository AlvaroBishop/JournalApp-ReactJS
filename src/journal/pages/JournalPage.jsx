import { Typography } from '@mui/material'
import { MailOutline } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'
import { NoteView } from '../views/NoteView'
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h4' component="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus assumenda </Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView/>
    </JournalLayout>
  )
}
