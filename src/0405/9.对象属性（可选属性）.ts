function myAxios(config: { 
  url: string
  method?: string
}) {
  console.log(config)
}

myAxios({ url: 'aaa/bbb' })
myAxios({ url: 'aaa/bbb', method: 'post' })
