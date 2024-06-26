import { initializeConnector } from '@web3-react/core'
import { Frame } from '@web3-react/frame'

export const [frame, useFrame] = initializeConnector<Frame>((actions) => new Frame(actions))
