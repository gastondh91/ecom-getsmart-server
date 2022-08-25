import app from './app'
import { host, port } from './utils'

console.log(`Server is running at ${host}`)

app.listen(port)
