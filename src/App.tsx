import { 
  Container, 
  Typography, 
  Box, 
  Link, 
  Paper,
  IconButton,
  Tooltip
} from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Email, 
  Description,
  Article,
  SportsEsports,
  Code
} from '@mui/icons-material';

function App() {
  return (
    <Container maxWidth={false} sx={{maxWidth: '800px', mx: 'auto', my: 'auto', minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
      <Paper 
        elevation={0} 
        sx={{ 
          width: '100%',
          borderRadius: '8px',
          border: '1px solid #333',
          overflow: 'hidden',
          boxShadow: '-8px 8px 0px #b9b5b0'
        }} 
      >
        {/* Window Title Bar */}
        <Box sx={{ 
          backgroundColor: '#d5b8d2', 
          padding: '8px 16px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid #333'
        }}>
          <Box sx={{ 
            display: 'flex', 
            gap: '6px'
          }}>
            <Box sx={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: '#f6f4e7',
              border: '1px solid #333'
            }} />
            <Box sx={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: '#f6f4e7',
              border: '1px solid #333'
            }} />
            <Box sx={{ 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: '#f6f4e7',
              border: '1px solid #333'
            }} />
          </Box>
        </Box>
        
        {/* Window Content */}
        <Box sx={{ p: 4, backgroundColor: '#f6f4e7' }}>
        <Box sx={{ textAlign: 'left', mb: 2 }}>
          <Typography variant="h5">
            Mayesha Kabir
          </Typography>
        </Box>
        
        <Box sx={{ textAlign: 'left', mb: 3 }}>
          <Typography variant="caption">
            Hey I'm Mayesha! I'm a Software Engineer currently working @ <Link href="https://www.lattice.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#7f7f7f' }}>Lattice</Link>. I graduated from the University of British Columbia, majoring in Computer Science and am always looking for new opportunities in software engineering.
            <br />
            <br />
            My experiences include working as an Software Developer on the Alexa Guard team @ <Link href="https://www.amazon.com/b?ie=UTF8&node=18021383011" target="_blank" rel="noopener noreferrer" sx={{ color: '#7f7f7f' }}>Amazon</Link> and I also previously interned @ <Link href="https://hootsuite.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#7f7f7f' }}>Hootsuite</Link>, <Link href="https://blackbirdinteractive.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#7f7f7f' }}>Blackbird Interactive</Link> & <Link href="https://www.eastsidegames.com" target="_blank" rel="noopener noreferrer" sx={{ color: '#7f7f7f' }}>East Side Games</Link>! Links below!
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Tooltip title="Resume">
            <IconButton 
              href="/resume/mayesha-kabir-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#d5b8d2' }}
            >
              <Description />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton 
              href="http://www.github.com/mayeshakabir" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#d5b8d2' }}
            >
              <GitHub />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton 
              href="https://www.linkedin.com/in/mayeshakabir/" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#d5b8d2' }}
            >
              <LinkedIn />
            </IconButton>
          </Tooltip>
          <Tooltip title="Medium">
            <IconButton 
              href="https://medium.com/@mayesha.kabir" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#d5b8d2' }}
            >
              <Article />
            </IconButton>
          </Tooltip>
          <Tooltip title="Itch.io">
            <IconButton 
              href="https://mayesha.itch.io" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#d5b8d2' }}
            >
              <SportsEsports />
            </IconButton>
          </Tooltip>
          <Tooltip title="Devpost">
            <IconButton 
              href="https://devpost.com/mayeshak" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#d5b8d2' }}
            >
              <Code />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email">
            <IconButton 
              href="mailto:mayeshakabir@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ fontSize: '1rem', color: '#d5b8d2' }}
            >
              <Email />
            </IconButton>
          </Tooltip>
        </Box>

        {/* <Box sx={{ textAlign: 'center', mb: 3 }}>
          <iframe 
            title="Jewel Thief"
            frameBorder="0" 
            src="https://itch.io/embed/198640?bg_color=f2f2f2&amp;link_color=8080ff&amp;border_color=f2f2f2" 
            width="208" 
            height="167"
          >
            <a href="https://mayesha.itch.io/jewel-thief">Jewel Thief by mayesha's games</a>
          </iframe>
          <iframe 
            title="Pre-Veal"
            frameBorder="0" 
            src="https://itch.io/embed/570447?bg_color=f2f2f2&amp;link_color=8080ff&amp;border_color=f2f2f2" 
            width="208" 
            height="167"
          >
            <a href="https://mayesha.itch.io/pre-veal">Pre-Veal by mayesha's games</a>
          </iframe>
          <iframe 
            title="I Die You Die"
            frameBorder="0" 
            src="https://itch.io/embed/200080?bg_color=f2f2f2&amp;link_color=8080ff&amp;border_color=f2f2f2" 
            width="208" 
            height="167"
          >
            <a href="https://mayesha.itch.io/i-die-you-die">I Die You Die by mayesha's games</a>
          </iframe>
        </Box> */}

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="caption" color="text.secondary">
          Mayesha Kabir © 2025
        </Typography>
      </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
