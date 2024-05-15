import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/miryna1978" target='_blank'>
          <img src="/images/github.svg" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/mie-harada-2072942b7/" target='_blank'>
          <img src="/images/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://twitter.com/mimylovesmusic" target='_blank'>
          <img src="/images/twitter.svg" alt="twitter" />
        </a>
        <a href="https://www.facebook.com/mie.harada.5" target='_blank'>
          <img src="/images/facebook.svg" alt="facebook" />
        </a>
        <hr />
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <p>©{new Date().getFullYear()} mimy All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer