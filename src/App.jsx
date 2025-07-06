import Button from '@mui/material/Button'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic'
import Typography from '@mui/material/Typography'

import {
  useColorScheme
} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
      <ModeToggle />
      <hr />
      <div>jjakob dev</div>
      <Typography variant='body2' color="text.secondary">Test Typography</Typography>
      <Button variant="contained">Hello world</Button>
      <AutoAwesomeMosaicIcon />
    </>
  )
}

export default App
