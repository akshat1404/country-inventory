import { COUNTRIES } from "../Data";

const allowedKeys=['country','currency','alpha2','alpha3','phoneCode','numeric'];

const getCorrespondingField=(fieldToGet, fieldToRefer, fieldValue)=>{

    if (typeof fieldToGet !== "string" || typeof fieldToRefer !== "string" || typeof fieldValue !== "string") {
        throw new TypeError("All parameters must be strings.");
    }

    if(!(allowedKeys.includes(fieldToGet) || allowedKeys.includes(fieldToRefer))){
        throw new Error("Allowed keys are 'country','currency','alpha2','alpha3','phoneCode' and 'numeric'");
    }

    fieldToRefer=fieldToRefer.toLowerCase();
    fieldToGet=fieldToGet.toLowerCase();
    fieldValue=fieldValue.trim();

    let valueToReturn=COUNTRIES.filter((item)=>item[fieldToRefer]===fieldValue).map(item=>item[fieldToGet]);

    return valueToReturn.length===1 ? valueToReturn[0] : valueToReturn;
}

export default getCorrespondingField;