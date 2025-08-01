import GithubIcon from './github'
import LinkedinIcon from './linkedin'
import InstagramIcon from './instagram'
import GmailIcon from './gmail'

const icons = ({ names }: { names: string }) => {
  switch (names) {
    case "linkedin":
      return <LinkedinIcon />
    case "github":
      return <GithubIcon />
    case "instagram":
      return <InstagramIcon />
    case "gmail":
      return <GmailIcon />
    default:
      return null
  }
}

export default icons
