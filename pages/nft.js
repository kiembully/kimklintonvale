import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/Connectors"
import nftStyles from '../styles/nft.module.scss'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const nft = () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
      try {
        await activate(injected)
      } catch (ex) {
        console.log(ex)
      }
    }
  
    async function disconnect() {
      try {
        deactivate()
      } catch (ex) {
        console.log(ex)
      }
    }
  
    return (
      <div >
          <div className={nftStyles.nftWrap}>
            <span></span>
            <span>
                <Stack direction="column" spacing={0}>
                    <Button 
                    variant="outlined" 
                    onClick={active ? disconnect : connect}>
                        {active ? "Disconnect" : "Connect to Metamask"}
                    </Button>
                    <Button disabled={!active} variant="text">
                    {active ? <span className={nftStyles.spnAccountID}>{account}</span>
                            : <span>Not connected</span>}
                    {active ? <span className={nftStyles.spnCopyIcon}><ContentCopyIcon /></span> : null}
                    </Button>
                </Stack>
            </span>
          </div>
          
        {/* <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
        {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
        <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button> */}
      </div>
    )
}

export default nft;