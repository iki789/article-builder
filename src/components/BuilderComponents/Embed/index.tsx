import React from 'react'

export const Embed: React.FunctionComponent<IEmbed> =  (props: IEmbed) => {
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{__html: props.code}} />
    </React.Fragment>
  )
}

interface IEmbed{
  code: string
}