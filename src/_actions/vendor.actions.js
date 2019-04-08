import { userService } from '../_services/';
import { history } from '../_helpers';
import config from '../config/config';

export const vendorAction = {
    getVendor,
    getVendorById,
    onChangeProps,
    editVendorInfo,
    createVendor,
    deleteVendorById
};

function getVendor(){
    return dispatch => {
        let apiEndpoint = config.horseApiUrl;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeVendorsList(response.data.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function createVendor(payload){
    return dispatch => {
        let apiEndpoint = config.horseApiUrl;
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/horses');
        }) 
    }
}

function getVendorById(id){

    return dispatch => {
        let apiEndpoint = config.horseApiUrl + '/' + id;
        userService.get(apiEndpoint)
        .then((response)=>{ 
            dispatch(editVendorsDetails(response.data.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch => {
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editVendorInfo(id, payload){
    return dispatch => {
        let apiEndpoint = config.horseApiUrl + '/' + id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/horses');
        }) 
    }
}

function deleteVendorById(id){
    return dispatch => {
        let apiEndpoint = config.horseApiUrl + '/' + id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteVendorsDetails());
            dispatch(vendorAction.getVendor());
        })
    };
}

export function changeVendorsList(vendor){
    return{
        type: "FETECHED_ALL_VENDOR",
        vendor: vendor
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editVendorsDetails(vendor){
    return{
        type: "VENDOR_DETAIL",
        id: vendor.id,
        horse_name: vendor.horse_name,
        horse_number: vendor.horse_number,
        color: vendor.color
    }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}

export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteVendorsDetails(){
    return{
        type: "DELETED_VENDOR_DETAILS"
    }
}
