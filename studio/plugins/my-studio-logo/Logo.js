import React from 'react'

const dataset = process.env.SANITY_STUDIO_API_DATASET

const Logo = () => {
  if (dataset === "development") {
    return (
      <div>DEVELOPMENT</div>
    )
  }
  return (
    <div>STILLE DISCO LOGO</div>
  )
}

export default Logo