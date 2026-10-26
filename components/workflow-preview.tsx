"use client"

import { useEffect, useState } from "react"

interface WorkflowPreviewProps {
  image: string
  imageWidth: number
  imageHeight: number
  title: string
  focusY: number
}

type PreviewStyle = React.CSSProperties & {
  "--workflow-height": string
  "--workflow-pan": string
  "--workflow-vertical": string
}

export function WorkflowPreview({ image, imageWidth, imageHeight, title, focusY }: WorkflowPreviewProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => setReduceMotion(media.matches)
    updateMotionPreference()
    media.addEventListener("change", updateMotionPreference)
    return () => media.removeEventListener("change", updateMotionPreference)
  }, [])

  // A câmera exibe cerca de 44% do fluxo por vez, sem escalar o PNG além da área útil.
  const workflowRatio = imageWidth / imageHeight
  const heightScale = 4 / workflowRatio
  const imageStyle: PreviewStyle = {
    "--workflow-height": `${heightScale * 100}%`,
    "--workflow-pan": "-55.56%",
    "--workflow-vertical": `-${focusY}%`,
  }

  return (
    <div className={`workflow-preview ${reduceMotion ? "workflow-preview--reduced-motion" : ""}`}>
      <img src={image} alt={`Workflow n8n: ${title}`} className="workflow-preview__image" style={imageStyle} />
    </div>
  )
}
