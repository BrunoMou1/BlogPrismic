    import React from 'react'

    const REPO_NAME = 'BrunoMou1/BlogPrismic'
    
    export const useUtterances = (commentNodeId: string) => {
      React.useEffect(() => {
        const scriptParentNode = document.getElementById(commentNodeId)
        if (!scriptParentNode) return
    
        const script = document.createElement('script')
        script.src = 'https://utteranc.es/client.js'
        script.async = true
        script.setAttribute('repo', REPO_NAME)
        script.setAttribute('issue-term', 'pathname')
        script.setAttribute('label', 'comment :speech_balloon:')
        script.setAttribute('theme', 'photon-dark')
        script.setAttribute('crossorigin', 'anonymous')
    
        scriptParentNode.appendChild(script)
    
        return () => {
          scriptParentNode.removeChild(scriptParentNode.firstChild as Node)
        }
      }, [commentNodeId])
    }