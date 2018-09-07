import RenderAuthorized from '../components/Authorized';
import { getAuthority } from './authority';

var Authorized = RenderAuthorized(getAuthority());
export default Authorized;