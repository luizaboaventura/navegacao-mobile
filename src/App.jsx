import { Bar, Button, Picture, Screen, Container, Text, List } from "./styles"
import { FaHome, FaBox, FaBookOpen, FaUsers } from "react-icons/fa";
import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";

const homeUrl = 'https://bit.ly/49neK3z'
const workUrl = 'https://bit.ly/49nVOl5'
const blogUrl = 'https://bit.ly/3ThaHjP'
const aboutUrl = 'https://bit.ly/3UPee9X'

const App = () => {
  const [url, setUrl] = useState(homeUrl)
  const [loading, setLoading] = useState(false)

  const handleChange = (url) => {
    setLoading(true)
    setTimeout(() => {
      setUrl(url)
      setLoading(false)
    }, 150)
  }

  return (
    <>
    <GlobalStyle/>
    <Container>
      <Screen>
        <Picture src={url} opacity={loading ? 0 : 1}/>
        <Bar>
          <List>
            <Button 
              onClick={() => handleChange(homeUrl)} 
              color={url === homeUrl? '#8e44ad' : '#777'}
            >
              <FaHome size={18} />
              <Text>Home</Text>
            </Button>
            <Button 
              onClick={() => handleChange(workUrl)} 
              color={url === workUrl? '#8e44ad' : '#777'}
            >
              <FaBox size={16} />
              <Text>Trabalho</Text>
            </Button>
            <Button 
              onClick={() => handleChange(blogUrl)} 
              color={url === blogUrl? '#8e44ad' : '#777'}
            >
              <FaBookOpen size={16} />
              <Text>Blog</Text>
            </Button>
            <Button 
              onClick={() => handleChange(aboutUrl)} 
              color={url === aboutUrl? '#8e44ad' : '#777'}
            >
              <FaUsers size={19} />
              <Text>Sobre nós</Text>
            </Button>
          </List>
        </Bar>
      </Screen>
    </Container>
    </>
  )
}

export default App