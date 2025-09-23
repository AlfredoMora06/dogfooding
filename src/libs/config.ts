const apiUrl = `${import.meta.env.VITE_REACT_APP_API_BASE_URL}`

const config = {
  env: import.meta.env.VITE_REACT_APP_ENV,
  api: {
    node: import.meta.env.VITE_REACT_APP_NODE_API,
    url: `${apiUrl}`,
  },
  app: {
    domain: import.meta.env.REACT_APP_BASE_URL,
    url: import.meta.env.REACT_APP_URL,
  },
}

export default config
