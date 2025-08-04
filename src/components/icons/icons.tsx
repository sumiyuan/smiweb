import GithubIcon from './github'
import LinkedinIcon from './linkedin'
import InstagramIcon from './instagram'

const icons = ({ names }: { names: string }) => {
  switch (names) {
    case "linkedin":
      return <LinkedinIcon />
    case "github":
      return <GithubIcon />
    case "instagram":
      return <InstagramIcon />
    default:
      return null
  }
}

export default icons
