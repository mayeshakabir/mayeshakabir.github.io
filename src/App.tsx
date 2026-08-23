import {
  Container,
  Typography,
  Box,
  Link,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Description,
  Article,
  SportsEsports,
  Code,
} from "@mui/icons-material";

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "800px",
        mx: "auto",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* Window Content */}
        <Box sx={{ p: 4 }}>
          <Box sx={{ textAlign: "left", mb: 2 }}>
            <Typography variant="h5">Mayesha Kabir</Typography>
          </Box>

          <Box sx={{ textAlign: "left", mb: 3 }}>
            <Typography variant="caption">
              Hey I'm Mayesha! I'm a Software Engineer currently working @{" "}
              <Link
                href="https://www.lattice.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#7f7f7f",
                  "&:hover": {
                    backgroundColor: "#fce4ec",
                  },
                }}
              >
                Lattice
              </Link>
              . I graduated from the University of British Columbia, majoring in
              Computer Science and am always looking for new opportunities in
              software engineering.
              <br />
              <br />
              My experiences include working as an Software Developer on the
              Alexa Guard team @{" "}
              <Link
                href="https://www.amazon.com/b?ie=UTF8&node=18021383011"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#7f7f7f",
                  "&:hover": {
                    backgroundColor: "#fce4ec",
                  },
                }}
              >
                Amazon
              </Link>{" "}
              and I also previously interned @{" "}
              <Link
                href="https://hootsuite.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#7f7f7f",
                  "&:hover": {
                    backgroundColor: "#fce4ec",
                  },
                }}
              >
                Hootsuite
              </Link>
              ,{" "}
              <Link
                href="https://blackbirdinteractive.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#7f7f7f",
                  "&:hover": {
                    backgroundColor: "#fce4ec",
                  },
                }}
              >
                Blackbird Interactive
              </Link>{" "}
              &{" "}
              <Link
                href="https://www.eastsidegames.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#7f7f7f",
                  "&:hover": {
                    backgroundColor: "#fce4ec",
                  },
                }}
              >
                East Side Games
              </Link>
              ! Links below!
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Tooltip title="GitHub">
              <IconButton
                href="http://www.github.com/mayeshakabir"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: "1rem", color: "#d5b8d2" }}
              >
                <img
                  src="img/github.png"
                  alt="github"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                href="https://www.linkedin.com/in/mayeshakabir/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: "1rem", color: "#d5b8d2" }}
              >
                <img
                  src="img/linkedin.png"
                  alt="linkedin"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Itch.io">
              <IconButton
                href="https://mayesha.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: "1rem", color: "#d5b8d2" }}
              >
                <img
                  src="img/itch.png"
                  alt="itch"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Resume">
              <IconButton
                href="/resume/mayesha-kabir-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: "1rem", color: "#d5b8d2" }}
              >
                <img
                  src="img/resume.png"
                  alt="resume"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email">
              <IconButton
                href="mailto:mayeshakabir@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: "1rem", color: "#d5b8d2" }}
              >
                <img
                  src="img/email.png"
                  alt="email"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Medium">
              <IconButton
                href="https://medium.com/@mayesha.kabir"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: "1rem", color: "#d5b8d2" }}
              >
                <img
                  src="img/medium.png"
                  alt="medium"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Devpost">
              <IconButton
                href="https://devpost.com/mayeshak"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: "1rem", color: "#d5b8d2" }}
              >
                <img
                  src="img/devpost.png"
                  alt="devpost"
                  style={{
                    width: "28px",
                    height: "28px",
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption" color="text.secondary">
              Mayesha Kabir © 2026
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
