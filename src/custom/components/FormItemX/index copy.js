
import SelectX from '../SelectX';
import CascaderX from '../CascaderX';
import CheckboxX from '../CheckboxX';
import CheckboxNoLabel from '../CheckboxNoLabel';
import RadioX from '../RadioX';
import RangePickerX from '../RangePickerX';
import RangePickerY from '../RangePickerY/index.js';
import UploadImageXForm from '../UploadImageXForm';
import UploadImageOrOnline from '../UploadImageOrOnline';
import UploadX from '../UploadX';
import TempOthers from '../TempOthers';


function FormItemX(props){
  let type = props.type;
    switch (type) {
      case 'input':
        return <TempOthers {...props}/>;
      case 'select':
        return <TempOthers {...props}/>;
      case 'SelectX':
        return <SelectX {...props}/>;
      case 'cascaderx':
        return <CascaderX {...props}/>;
      case 'number':
        return <TempOthers {...props}/>;
      case 'checkboxnolabel':
        return <CheckboxNoLabel {...props}/>;
      case 'checkboxx':
        return <CheckboxX {...props}/>;
      case 'radiox':
        return <RadioX {...props}/>;
      case 'rangepickerx':
        return <RangePickerX {...props}/>;
      case 'rangepickery':
        return <RangePickerY {...props}/>;
      case 'datepicker':
        return <TempOthers {...props}/>;
      case 'textarea':
        return <TempOthers {...props}/>;
      case 'upload':
        return <TempOthers {...props}/>;
      case 'uploadx':
        return <UploadX {...props}/>;
      case 'treeselect':
        return <TempOthers {...props}/>;
      case 'uploadimagex':
        return <UploadImageXForm {...props}/>;
      case 'uploadimageonmodal':
        return <UploadImageOrOnline {...props}/>;
      case 'null':
        return [];
        break;
      default:
        return <TempOthers {...props}/>;
    } 
}



export default FormItemX;
