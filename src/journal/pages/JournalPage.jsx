import { IconButton, Typography } from '@mui/material'
import { AddOutlined, MailOutline } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views'
import { NoteView } from '../views/NoteView'
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h4' component="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus assumenda </Typography> */}

      <NothingSelectedView />
      {/* <NoteView/> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover' : { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
