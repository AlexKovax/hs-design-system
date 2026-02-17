import { useState } from 'react'

interface Props {
  code: string
  lang?: string
}

export default function CodeBlock({ code, lang = 'css' }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="code-block">
      <pre data-lang={lang}>
        <code>{code}</code>
      </pre>
      <button className="code-copy-btn" onClick={handleCopy}>
        {copied ? 'copied!' : 'copy'}
      </button>
    </div>
  )
}
