import { setupServer } from "msw/node"
import { handle } from "./handle"
export const server = setupServer(...handle)