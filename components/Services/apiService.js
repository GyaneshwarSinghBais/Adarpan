// apiService.js

import axios from "axios";

const api = axios.create({
   baseURL: "http://140.238.246.250:8080/api", // Server URL
  // baseURL: "https://localhost:7247/api", // Development URL
});

export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/Login", {
      emailid: email,
      pwd: password,
    });




    if (response.status === 200) {

      return response.data.userInfo;

    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    throw error;
  }
};


export const fetchStockReport = async (facilityId, itemid, iType) => {
  try {
    //console.log("facilityId: " + facilityId + "itemid: " + "iType: " + iType);
    const response = await api.get(`/CGMSCStock/stockReport?faclityId=${facilityId}&itemid=${itemid}&catname=${iType}`);
    //console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchfacstockReportddl = async (facilityId) => {
  try {
    const response = await api.get(`/CGMSCStock/facstockReportddl?faclityId=${facilityId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMainCategoryService = async (facilityId) => {
  try {
    //alert("In Service Call"+facilityId);
    const response = await api.get(`/CGMSCStock/getMainCategory?faclityId=${facilityId}`);
    //console.log("fetchMainCategoryService: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchWarehouseStockReport = async (searchp, facilityid, mcatid) => {
  try {


    const response = await api.get(`/CGMSCStock/WHstockReport?searchp=${searchp}&facid=${facilityid}&mcatid=${mcatid}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchIncompleteWardIssue = async (facilityid) => {
  try {
    const response = await api.get(`/CGMSCStock/getIncompleteWardIssue?faclityId=${facilityid}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchWardIssueItems = async (facilityid, issueid) => {
  try {
    const response = await api.get(`/CGMSCStock/getWardIssueItems?faclityId=${facilityid}&issueId=${issueid}`);
    //alert(JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchItemStock = async (facilityid, itemId, indentid) => {
  try {
    const response = await api.get(`/CGMSCStock/getItemStock?faclityId=${facilityid}&itemid=${itemId}&indentid=${indentid}`);
    //alert(JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const postWardIssue = async (issueData, facid) => {
  try {
    const response = await api.post(`/CGMSCStock/postWardIssue?facid=${facid}`, issueData);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to post ward issue");
    }
  } catch (error) {
    throw error;
  }
};



export const postWardIssueMaster = async (issueData, facid) => {
  try {
    const response = await api.post(`/CGMSCStock/postIssueNo?facid=${facid}`, issueData);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to post ward issue");
    }
  } catch (error) {
    throw error;
  }
};


export const fetchIncompleteWardIssueItems = async (issueId) => {
  try {
    const response = await api.get(`/CGMSCStock/getIncompleteWardIssueItems?issueId=${issueId}`);
    //alert(JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteIncompleteIssueItems = async (issueItemId) => {
  try {
    //alert("before" + issueItemId)
    const response = await api.delete(`/CGMSCStock/deleteIncompleteIssueItems?IssueItemID=${issueItemId}`);
    //alert("after : " + JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchFacilityWards = async (facilityId) => {
  try {

    const response = await api.get(`/CGMSCStock/getFacilityWards?faclityId=${facilityId}`);
    //alert(JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchFacilityIssueNo = async (facilityId) => {
  try {

    const response = await api.get(`/CGMSCStock/getGeneratedIssueNo?facId=${facilityId}`);
    //alert(JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchHoldStockReport = async (facilityId) => {
  try {

    const response = await api.get(`/CGMSCStock/getHoldStock?faclityId=${facilityId}`);
    return response.data;
  } catch (error) {
    throw error;
  }

};

export const fetchNearExpStockReport = async (facilityId, criteria) => {
  try {
    const response = await api.get(`/CGMSCStock/getNearExpStock?faclityId=${facilityId}&criteria=${criteria}`);
    //alert(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }

};

export const fetchCategory = async (facilityId) => {
  try {

    const response = await api.get(`/CGMSCStock/getItemCategory?faclityId=${facilityId}`);
    return response.data;
  } catch (error) {
    throw error;
  }

};


export const fetchIncomplWardIndentMaster = async (facilityId) => {
  try {

    const response = await api.get(`/CGMSCStock/getIncomplWardIndentMaster?faclityId=${facilityId}`);
    return response.data;
  } catch (error) {
    throw error;
  }

};




export const fetchIncomplReceiptMasterWH = async (facilityId) => {
  try {

    const response = await api.get(`/CGMSCStock/getReceiptMasterFromWH?faclityId=${facilityId}`);

    return response.data;
  } catch (error) {
    throw error;
  }

};


export const postIssueNoAgainstIndent = async (issueMasterData) => {
  // alert("inside apiServices: " + JSON.stringify(issueMasterData));
  try {
    const response = await api.post(`/CGMSCStock/postIssueNoAgainstIndent`, issueMasterData);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }

};



export const fetchIndentItems = async (indentId) => {
  try {
    //alert("Inset fetchIndentItems:" + indentId)
    const response = await api.get(`/CGMSCStock/getWardIndentItems?nocid=${indentId}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const putCompleteWardIssues = async (issueId) => {
  try {
    const response = await api.put(`/CGMSCStock/completeWardIssues?IssueID=${issueId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteWardIssues = async (issueId) => {
  try {
    const response = await api.delete(`/CGMSCStock/deleteWardIssues?IssueID=${issueId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const postReceiptMaster = async (receiptData, facid) => {
  //alert(JSON.stringify(receiptData));
  //console.log(JSON.stringify(receiptData));
  try {
    const response = await api.post(`/CGMSCStock/postReceiptMaster?facid=${facid}`, receiptData);
    //alert(JSON.stringify(response.data));
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to post ward issue");
    }
  } catch (error) {
    throw error;
  }
};

export const fetchReceiptItemsDDL = async (facid, receiptid, indentId) => {
  try {
    //alert("Inset fetchIndentItems:" + indentId)
    const response = await api.get(`/CGMSCStock/getReceiptItemsDDL?faclityId=${facid}&FACRECEIPTID=${receiptid}&IndentID=${indentId}`);
    //alert("gyan Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchRacks = async (facid) => {
  try {
    //alert("Inset fetchIndentItems:" + indentId)
    const response = await api.get(`/CGMSCStock/getRacks?WH_FACID=${facid}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchReceiptDetails = async (receipttype, facid, facReceiptid) => {
  try {
    //alert("Inset fetchIndentItems:" + indentId)
    const response = await api.get(`/CGMSCStock/getReceiptDetails?facilityReceiptType=${receipttype}&facilityId=${facid}&facReceiptId=${facReceiptid}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchReceiptItemsDetail = async (faclityId, FACRECEIPTID, IndentID, inwno) => {
  try {
    //alert("inside fetchReceiptItemsDetail");
    const response = await api.get(`/CGMSCStock/getReceiptItemsDetail?faclityId=${faclityId}&FACRECEIPTID=${FACRECEIPTID}&IndentID=${IndentID}&inwno=${inwno}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchReceiptItms = async (receiptData, rackID, facid, facReceiptId, whinwno) => {
  try {
    const response = await api.post(`/CGMSCStock/postReceiptItems?rackID=${rackID}&facid=${facid}&facReceiptId=${facReceiptId}&whinwno=${whinwno}`, receiptData);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to post Receipt data");
    }
  } catch (error) {
    throw error;
  }
};


export const deleteReceipts = async (receiptId) => {
  try {
    //alert("before" + issueItemId)
    const response = await api.delete(`/CGMSCStock/deleteReceipts?receiptId=${receiptId}`);
    //alert("after : " + JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const putReceipts = async (receiptId) => {
  try {
    const response = await api.put(`/CGMSCStock/completeReceipts?receiptId=${receiptId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteReceiptItems = async (inwno, facReceiptItemId, itemid, receiptId, deletedBatchQty) => {
  try {
    const response = await api.delete(`/CGMSCStock/deleteReceiptItems?inwno=${inwno}&facReceiptItemId=${facReceiptItemId}&itemid=${itemid}&receiptId=${receiptId}&deletedBatchQty=${deletedBatchQty}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchStockPerEDL = async (faclityId, Mcatid) => {
  try {
    const response = await api.get(`/CGMSCStock/getStockPerEDL?faclityId=${faclityId}&Mcatid=${Mcatid}`);
    //alert("Response from fetchStockPerEDL: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStockPerNonEDLAg_ApprovedAI = async (faclityId, Mcatid) => {
  try {
    const response = await api.get(`/CGMSCStock/getStockPerNonEDLAg_ApprovedAI?faclityId=${faclityId}&Mcatid=${Mcatid}`);
    //alert("Response from fetchStockPerNonEDLAg_ApprovedAI: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchStockOutwillDown = async (faclityId, Mcatid, isEDL) => {
  try {
    const response = await api.get(`/CGMSCStock/getStockOutDrillDown?faclityId=${faclityId}&Mcatid=${Mcatid}&isEDL=${isEDL}`);
    //alert("Response from fetchStockOutDrillDown: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchFacilityIndentToWH = async (faclityId, yrid, itemid) => {
  try {
    const response = await api.get(`/CGMSCStock/getFacilityIndentToWH?faclityId=${faclityId}&yrid=${yrid}&itemid=${itemid}`);
    //alert("Response from fetchFacilityIndentToWH: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchWHissueToFacility = async (faclityId, yrid, itemid) => {
  try {
    const response = await api.get(`/CGMSCStock/getWHissueToFacility?faclityId=${faclityId}&yrid=${yrid}&itemid=${itemid}`);
    //alert("Response from fetchFacilityIndentToWH: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchFacilityReceiptAgainstIndent = async (faclityId, yrid, itemid) => {
  try {
    const response = await api.get(`/CGMSCStock/getFacilityReceiptAgainstIndent?faclityId=${faclityId}&yrid=${yrid}&itemid=${itemid}`);
    //alert("Response from fetchFacilityIndentToWH: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchFacilityReceiptFromOtherFacilityOrLP = async (faclityId, yrid, itemid) => {
  try {
    const response = await api.get(`/CGMSCStock/getFacilityReceiptFromOtherFacilityOrLP?faclityId=${faclityId}&yrid=${yrid}&itemid=${itemid}`);
    //alert("Response from fetchFacilityIndentToWH: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchFacilityWardIssue = async (faclityId, yrid, itemid) => {
  try {
    const response = await api.get(`/CGMSCStock/getFacilityWardIssue?faclityId=${faclityId}&yrid=${yrid}&itemid=${itemid}`);
    //alert("Response from fetchFacilityIndentToWH: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchFacilityIssueToOtherFacility = async (faclityId, yrid, itemid) => {
  try {
    const response = await api.get(`/CGMSCStock/getFacilityIssueToOtherFacility?faclityId=${faclityId}&yrid=${yrid}&itemid=${itemid}`);
    //alert("Response from fetchFacilityIndentToWH: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchItemDetail = async (faclityId, yrid, itemid) => {
  try {
    const response = await api.get(`/CGMSCStock/getItemDetail?faclityId=${faclityId}&yrid=${yrid}&itemid=${itemid}`);
    //alert("Response from fetchItemDetail: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchYear = async () => {
  try {
    const response = await api.get(`/CGMSCStock/getYear`);
    //alert("Response from fetchYear: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchFacilityAvailableItem = async (facilityId) => {
  try {
    //   alert("Inset fetchFacilityAvailableItem:" + facilityId)
    const response = await api.get(`/CGMSCStock/getFacilityAvailableItem?facilityId=${facilityId}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchfacIndentAlert = async (faclityId, Mcatid, isEDL) => {
  try {

    //alert("before api");
    const response = await api.get(`/CGMSCStock/FacIndentAlert?facid=${faclityId}&mcatid=${Mcatid}&isEDL=${isEDL}&itemid=0`);
    // alert("Response from IndentAlert: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Indent to wh works
export const fetchIndenttoWH = async (facilityid, istatus) => {
  try {
    const response = await api.get(`/CGMSCStock/FacMonthIndent?facid=${facilityid}&istatus=${istatus}`);
    //alert("Response from indent to wh: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchFacMonthIndentItems = async (facilityid, Mcatid, indendid) => {
  try {
    // alert("inside api fetchFacMonthIndentItemsData");
    const response = await api.get(`/CGMSCStock/getFacMonthIndentItems?faclityId=${facilityid}&Mcatid=${Mcatid}&indendid=${indendid}`);
    //alert("Response from fetchFacMonthIndentItems: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchfacIndentAlert1 = async (faclityId, Mcatid, isEDL, itemid) => {
  try {

    //alert("before api"+faclityId+" "+Mcatid+" "+isEDL+" "+itemid);
    const response = await api.get(`/CGMSCStock/FacIndentAlert?facid=${faclityId}&mcatid=${Mcatid}&isEDL=${isEDL}&itemid=${itemid}`);
    //alert("Response from fetchfacIndentAlert1: " + JSON.stringify(response.data));
    console.log("Response from fetchfacIndentAlert1: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const postNOCitems = async (NOCitemData) => {
  try {
    const response = await api.post(`/CGMSCStock/postNOCitems`, NOCitemData);
    if (response.status === 200) {
      // console.log("Response from postNOCitems: " + JSON.stringify(response.data));
      return response.data;
    } else {
      throw new Error("Failed to post NOC items");
    }
  } catch (error) {
    throw error;
  }
};

export const fetchSavedFacIndentItems = async (noc_id) => {
  try {

    //alert("before call indie api service" + noc_id);
    const response = await api.get(`/CGMSCStock/getSavedFacIndentItems?nocid=${noc_id}`);
    //alert("Response from fetchSavedFacIndentItems: " + JSON.stringify(response.data));
    //console.log("Response from fetchSavedFacIndentItems: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCgmscNOCitemsALL = async (nocid) => {
  try {
    //alert("before" + issueItemId)
    const response = await api.delete(`/CGMSCStock/deleteCgmscNOCitemsALL?nocid=${nocid}`);
    // alert("after : " + JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const completemascgmscnoc = async (nocid) => {
  try {
    //lert("before completemascgmscnoc" + nocid)
    const response = await api.put(`/CGMSCStock/completemascgmscnoc?nocid=${nocid}`);
    //alert("after : " + JSON.stringify(response.data));
    //console(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMonthIndentProgram = async () => {
  try {
    //console.log("facilityId: " + facilityId + "itemid: " + "iType: " + iType);
    const response = await api.get(`/CGMSCStock/getMonthIndentProgram`);
    //console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const postWhIndentNo = async (facid, indentDt, programid) => {
  try {
    const response = await api.post(`/CGMSCStock/postWhIndentNo?facid=${facid}&indentDt=${indentDt}&programid=${programid}`);
    if (response.status === 200) {
      //   console.log("after postWhIndentNo execute : " + JSON.stringify(response.data));
      return response.data;
    } else {
      throw new Error("Failed to post ward issue");
    }
  } catch (error) {
    throw error;
  }
};


/// DPDMIS services////


export const fetPOReceiptData = async (yearid, mcid, itemid) => {
  try {

    //alert("before api"+faclityId+" "+Mcatid+" "+isEDL+" "+itemid);
    const response = await api.get(`/HO/HODYearWisePO?yearid=${yearid}&mcatid=${mcid}&itemid=${itemid}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCGMSCStockQTY = async (itemid, SearchP, WHID, userid, coll_cmho) => {
  try {

    //alert("before api serach" + SearchP + "itemid " + itemid);
    const response = await api.get(`HO/CGMSCItemStock?mcatid=0&EDLNedl=0&mitemid=${itemid}&WHID=${WHID}&searchP=${SearchP}&userid=${userid}&coll_cmho=${coll_cmho}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchRCDetail = async (itemid, SearchP) => {
  try {


    const response = await api.get(`HO/RCDetail?itemid=${itemid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchitemIndentQuantity = async (itemid, fwhid, distid, userid, coll_cmho) => {
  try {

    //alert("before api fetchitemIndentQuantity itemid : " + itemid+" userid:"+userid+" role"+coll_cmho);  
    const response = await api.get(`HO/itemIndentQuantity?itemid=${itemid}&fwhid=${fwhid}&distid=${distid}&userid=${userid}&coll_cmho=${coll_cmho}`);
    //alert("fetchitemIndentQuantity: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};






export const fetchWHStockQTY = async (mitemid, whid) => {
  try {

    //alert("before api"+faclityId+" "+Mcatid+" "+isEDL+" "+itemid);
    const response = await api.get(`HO/WarehouseWiseStock?mitemid=${mitemid}&whid=${whid}`);
    //  alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchDistribution = async (mcid, hodid) => {
  try {

    //alert("before api"+faclityId+" "+Mcatid+" "+isEDL+" "+itemid);
    const response = await api.get(`HO/HODYearWiseIssuance?yearid=0&mcatid=${mcid}&hodid=${hodid}&itemid=0`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCStockValue = async (mcid, whid) => {
  try {

    const response = await api.get(`HO/CGMSCStockValueData?mcatid=${mcid}&warehouseId=${whid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTotalRC = async () => {
  try {

    const response = await api.get(`HOTender/TotalRC`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchTotalAcceptance = async () => {
  try {

    const response = await api.get(`HOTender/TotalAcceptance`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchTotalPriceBid = async (RCValidInt) => {
  try {


    const response = await api.get(`HOTender/TotalPriceBid?RCValidInt=${RCValidInt}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchTotalTotalCovB = async (RCValidInt, statusCOVID) => {
  try {

    const response = await api.get(`HOTender/TotalCovB?RCValidInt=${RCValidInt}&statusCOVID=${statusCOVID}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTotalObjClaim = async () => {
  try {

    const response = await api.get(`HOTender/TotalObjClaim`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchTotalTotalCovA = async () => {
  try {

    const response = await api.get(`HOTender/TotalCovA`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTotalTotalLive = async (RCValidInt) => {
  try {

    const response = await api.get(`HOTender/TotalLive?RCValidInt=${RCValidInt}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTotaltoBeTender = async () => {
  try {

    const response = await api.get(`HOTender/TotaltoBeTender`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchQCLabOutTime = async () => {
  try {

    const response = await api.get(`HO/QCLabOutTime`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchQCLabWithTime = async () => {
  try {

    const response = await api.get(`HO/QCLabWithTime`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchQCResultFinalUpdate = async () => {
  try {

    const response = await api.get(`HO/QCResultFinalUpdate`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUnpaidSupplier = async () => {
  try {

    const response = await api.get(`HO/getUnpaidSupplier`);
    //alert(JSON.stringify('inside fetchUnpaidSupplier: ' + response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSupplierLiability = async (supplierId) => {
  try {

    const response = await api.get(`HO/getSupplierLiability?supplierId=${supplierId}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};





export const fetchSupplierPO = async (supplierId, fitnessStatus, hodType) => {
  try {

    const response = await api.get(`HO/getSupplierPO?supplierId=${supplierId}&fitnessStatus=${fitnessStatus}&hodType=${hodType}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPriceBidDril = async (RCValidInt, mcid, edltype) => {
  try {
    //alert("RCValidInt:"+RCValidInt," mcid:"+mcid," edltype:"+edltype);
    const response = await api.get(`HOTender/TotalPriceBidDril?RCValidInt=${RCValidInt}&mcid=${mcid}&edltype=${edltype}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchQCLabOutTimeBatchwise = async (mcid, dayID) => {
  try {
    // alert(" mcid:"+mcid," dayID:"+dayID);
    const response = await api.get(`HO/QCLabOutTimeBatchwise?mcid=${mcid}&dayID=${dayID}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchQCLabOutTimeLabDetails = async (mcid, dayID, batchno) => {
  try {
    //alert(" mcid:"+mcid," dayID:"+dayID,"batchno"+batchno);
    const response = await api.get(`HO/QCLabOutTimeLabDetails?mcid=${mcid}&dayID=${dayID}&batchno=${batchno}`);
    //  alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCOVDrillDown = async (RCValidInt, mcid, edltype, covStID) => {
  try {
    //  alert("RCValidInt:"+RCValidInt," gyan final mcid:"+mcid," edltype:"+edltype,"covStID:"+covStID);
    //  CovBAObjeClaimLiveDrillDown(string RCValidInt, string mcid, string edltype,string statusCOVID)
    const response = await api.get(`HOTender/CovBAObjeClaimLiveDrillDown?RCValidInt=${RCValidInt}&mcid=${mcid}&edltype=${edltype}&statusCOVID=${covStID}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchYearWiseRC = async (mcid) => {
  try {


    const response = await api.get(`HOTender/YearWiseRC?mcatid=${mcid}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchYearWiseExpired = async (mcid) => {
  try {

    // alert("service:"+mcid);
    const response = await api.get(`HO/YearWiseExpired?mcid=${mcid}`);
    //  alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTenderAlert = async (mcid, edlnedl, rcstatus, agIndent) => {
  try {
    // mcid,string edl,string rc_NoRC, string agIndent
    // const response = await api.get(`HOTender/TotalCovB?RCValidInt=${RCValidInt}&statusCOVID=${statusCOVID}`);
    //  alert("mcid:"+mcid+" edlnedl:"+edlnedl+" rcstatus:"+rcstatus);
    const response = await api.get(`HOTender/RCValidTenderPostion?mcid=${mcid}&edl=${edlnedl}&rc_NoRC=${rcstatus}&agIndent=${agIndent}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchPOAlertSummary = async (mcid, hodid) => {
  try {
    // mcid,string edl,string rc_NoRC, string agIndent
    // const response = await api.get(`HOTender/TotalCovB?RCValidInt=${RCValidInt}&statusCOVID=${statusCOVID}`);
    //  alert("inside service mcid:"+mcid+" edlnedl:"+hodid);
    const response = await api.get(`HO/getPOAlertBaedOnAI?mcid=${mcid}&hodid=${hodid}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPOAlertDetails = async (mcid, hodid, edlvalue, rcvalue, rpttype) => {
  try {


    const response = await api.get(`HO/getPOStockoutQCPipe_Details?mcid=${mcid}&hodid=${hodid}&edlvalue=${edlvalue}&rcvalue=${rcvalue}&rpttype=${rpttype}`);
    //  alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCGMSCPublicStock = async (mcid) => {
  try {
    // mcid,string edl,string rc_NoRC, string agIndent
    // const response = await api.get(`HOTender/TotalCovB?RCValidInt=${RCValidInt}&statusCOVID=${statusCOVID}`);
    //  alert("inside service mcid:"+mcid+" edlnedl:"+hodid);
    // alert("inside  service");
    const response = await api.get(`HO/PublicCGMSCStock?mcid=${mcid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCGMSCPublicRC = async (mcid) => {
  try {
    // mcid,string edl,string rc_NoRC, string agIndent
    // const response = await api.get(`HOTender/TotalCovB?RCValidInt=${RCValidInt}&statusCOVID=${statusCOVID}`);
    //  alert("inside service mcid:"+mcid+" edlnedl:"+hodid);
    // alert("inside  service");
    const response = await api.get(`HO/SearchRCValid?mcid=${mcid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchNearExpService = async (mcid, nexppara) => {
  try {
    // mcid,string edl,string rc_NoRC, string agIndent
    // const response = await api.get(`HOTender/TotalCovB?RCValidInt=${RCValidInt}&statusCOVID=${statusCOVID}`);
    //  alert("inside service mcid:"+mcid+" edlnedl:"+hodid);
    const response = await api.get(`HO/NearExpReport?mcid=${mcid}&nexppara=${nexppara}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchNearExpReportDrugs = async (mcid, nexppara, expmonth) => {
  try {
    // mcid,string edl,string rc_NoRC, string agIndent
    // const response = await api.get(`HOTender/TotalCovB?RCValidInt=${RCValidInt}&statusCOVID=${statusCOVID}`);
    //  alert("inside service mcid:"+mcid+" edlnedl:"+hodid);
    const response = await api.get(`HO/NearExpReportDrugs?mcid=${mcid}&nexppara=${nexppara}&expmonth=${expmonth}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchNearExpReportBatch = async (mcid, nexppara, expmonth) => {
  try {

    // alert("inside service mcid:"+mcid+" edlnedl:"+nexppara+" expmonth:"+expmonth);
    const response = await api.get(`HO/NearExpReportbatch?mcid=${mcid}&nexppara=${nexppara}&expmonth=${expmonth}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};




export const fetchFacilityMC = async (hod, disid, factypeid, whid, facid) => {
  try {

    const response = await api.get(`Master/MasfacilityInfo?hod=${hod}&disid=${disid}&factypeid=${factypeid}&whid=${whid}&facid=${facid}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMCAIVsIssuanceService = async (faciid) => {
  try {

    const response = await api.get(`Warehouse/MCHAIvsIssuance?faciid=${faciid}`);
    //   alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchIndentPendingWH = async (per, clause) => {
  try {

    const response = await api.get(`Warehouse/IndentPending?per=${per}&clause=${clause}`);
    //  alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchIndentPendingDetails = async (whid, clause, factype) => {
  try {

    const response = await api.get(`Warehouse/IndentPendingDetails?whid=${whid}&clause=${clause}&factype=${factype}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchTenderStage = async (mcatid, covstatus) => {
  try {
    //alert('Iniside fetchTenderStage, mcatid: ' + mcatid + 'covstatus: '+covstatus);   
    const response = await api.get(`/HOTender/TenderStagePending?mcatid=${mcatid}&covstatus=${covstatus}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPublicStockitems = async (mcid) => {
  try {
    //alert("In Service Call"+facilityId);
    const response = await api.get(`/HO/PublicCGMSCStockItems?mcid=${mcid}`);
    //console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchDHSIndentvsIssuance = async (pid, hodid) => {
  try {

    //alert("In Service Call"+facilityId);
    const response = await api.get(`/HO/DHSIndentvsIssuance?programid=${pid}&hodid=${hodid}`);
    //console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchfacilityddl = async (userid, districtid, hodid, factypeid) => {
  try {

    //alert("In Service Call"+facilityId);
    const response = await api.get(`/Facility/Facilitiesddl?userid=${userid}&districtid=${districtid}&hodid=${hodid}&factypeid=${factypeid}`);
    //  alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchfacstockstatuscount = async (facid, userid, edltype, hodid) => {
  try {
    const response = await api.get(`/Facility/DistEDLPostion?facid=${facid}&userid=${userid}&edltype=${edltype}&hodid=${hodid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchFunds = async () => {
  try {
    const response = await api.get(`/HO/getFunds`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchfitReport = async (potype, budgetId) => {
  try {
    //alert('Iniside fetchfitReport, potype : ' + potype + 'budgetId: '+budgetId);   
    const response = await api.get(`/HO/fitReport?potype=${potype}&budgetId=${budgetId}`);
    // alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchfitReportDetail = async (BudGetID, FitUnfit, yr, month) => {
  try {
    //alert(`/HO/fitReportDetail?BudGetID=${BudGetID}&FitUnfit=${FitUnfit}&yr=${yr}&month=${month}`);   
    const response = await api.get(`/HO/fitReportDetail?BudGetID=${BudGetID}&FitUnfit=${FitUnfit}&yr=${yr}&month=${month}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchEquipments = async () => {
  try {
    //alert(`/HO/fitReportDetail?BudGetID=${BudGetID}&FitUnfit=${FitUnfit}&yr=${yr}&month=${month}`);   
    const response = await api.get(`/Reagent/getEquipmentName`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchWarehouseWiseReagent = async (mmid) => {
  try {
    //alert(`/Reagent/getWarehouseWiseReagent?mmid=${mmid}`);   
    const response = await api.get(`/Reagent/getWarehouseWiseReagent?mmid=${mmid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchGroupItemtypeRCStock = async (mcid, Grouportype, whid) => {
  try {

    const response = await api.get(`/HO/GroupItemtypeRCStock?mcid=${mcid}&Grouportype=${Grouportype}&whid=${whid}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchitemwisevariousStockposition = async (mcid, itemid, groupid, itemtypeid, edltype, edlcat, yearid, dhsai, dmai, totalai, redycnt, uqccnt, pipelinecnt, rccnt, whid) => {
  try {

    //alert (`/HO/getItemDetailsWithHOD?mcid=${mcid}&itemid=${itemid}&groupid=${groupid}&itemtypeid=${itemtypeid}&edltype=${edltype}&edlcat=${edlcat}&yearid=${yearid}&dhsai=${dhsai}&dmai=${dmai}&totalai=${totalai}&redycnt=${redycnt}&uqccnt=${uqccnt}&pipelinecnt=${pipelinecnt}&rccnt=${rccnt}&whid=${whid}`);   
    const response = await api.get(`/HO/getItemDetailsWithHOD?mcid=${mcid}&itemid=${itemid}&groupid=${groupid}&itemtypeid=${itemtypeid}&edltype=${edltype}&edlcat=${edlcat}&yearid=${yearid}&dhsai=${dhsai}&dmai=${dmai}&totalai=${totalai}&redycnt=${redycnt}&uqccnt=${uqccnt}&pipelinecnt=${pipelinecnt}&rccnt=${rccnt}&whid=${whid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchWarehouse = async (allwh) => {
  try {
    // alert(allwh);   
    const response = await api.get(`/Master/MasWH?allwh=${allwh}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchWarehouseParticular = async (allwh, whid) => {
  try {
    // alert(allwh);   
    const response = await api.get(`/Master/MasWHParticular?allwh=${allwh}&whid=${whid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchWHItemStock = async (whid, mcid, groupId) => {
  try {
    // alert(allwh);   
    const response = await api.get(`/PublicReport/WHItemStock?whid=${whid}&mcid=${mcid}&groupId=${groupId}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchFundvsExpd = async (budgetid, yearid) => {
  try {
    //alert(`/Reagent/getWarehouseWiseReagent?mmid=${mmid}`);   
    const response = await api.get(`/HO/GetFundBalance?budgetid=${budgetid}&yearid=${yearid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};




export const fetchStateReagent = async (mmid) => {
  try {
    //alert(`/Reagent/getWarehouseWiseReagent?mmid=${mmid}`);   
    const response = await api.get(`/Reagent/getStockIssuanceStateReagent?mmid=${mmid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchReagentStockAndSupplySummary = async () => {
  try {
    //alert(`Reagent/reagentStockAndSupplySummary`);   
    const response = await api.get(`/Reagent/reagentStockAndSupplySummary`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchReagentStockAndSupply = async (stockProgressStatus) => {
  try {
    //alert(`/Reagent/reagentStockAndSupply?stockProgressStatus=${stockProgressStatus}`);   
    const response = await api.get(`/Reagent/reagentStockAndSupply?stockProgressStatus=${stockProgressStatus}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCurrentLiability = async (stockProgressStatus) => {
  try {
    //alert(`/Reagent/getCurrentLiability=${stockProgressStatus}`);   
    const response = await api.get(`/Reagent/getCurrentLiability?budgetid=${stockProgressStatus}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};




export const fetchdhsDmeYearConsumption = async (itemid, hodid, whid, distid, facilityid, userid, coll_cmho) => {
  try {
    //alert(`inside fetchdhsDmeYearConsumption`);   
    const response = await api.get(`/HO/dhsDmeYearConsumption?itemid=${itemid}&hodid=${hodid}&whid=${whid}&distid=${distid}&facilityid=${facilityid}&userid=${userid}&coll_cmho=${coll_cmho}`);
    //alert(`inside fetchdhsDmeYearConsumption` + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchgetDhsDmeStock = async (itemid, hodid, whid, distid, facilityid, userid, coll_cmho) => {
  try {
    // alert('inside fetchgetDhsDmeStock');   
    const response = await api.get(`/HO/getDhsDmeStock?itemid=${itemid}&hodid=${hodid}&whid=${whid}&distid=${distid}&facilityid=${facilityid}&userid=${userid}&coll_cmho=${coll_cmho}`);
    // alert('fetchgetDhsDmeStock: '+JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchdistrictWiseDhsDmeStock = async (itemid) => {
  try {
    //alert(`/Reagent/getCurrentLiability`);   
    const response = await api.get(`/HO/districtWiseDhsDmeStock?itemid=${itemid}`);
    //alert(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDistrictDDL = async (boovalue, whid, distid, userid, coll_cmho) => {
  try {

    const response = await api.get(`/Master/MasDistrict?allDist=${boovalue}&whid=${whid}&distid=${distid}&userid=${userid}&coll_cmho=${coll_cmho}`);
    //lert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDistFACwiseStockPostion = async (disid, coll_cmho, mcatid, EDLNedl, mitemid, userid) => {
  try {

    const response = await api.get(`/District/DistFACwiseStockPostionNew?disid=${disid}&coll_cmho=${coll_cmho}&mcatid=${mcatid}&EDLNedl=${EDLNedl}&mitemid=${mitemid}&userid=${userid}`);
    //const response = await api.get(`/District/DistFACwiseStockPostion?disid=${disid}&coll_cmho=${coll_cmho}&mcatid=${mcatid}&EDLNedl=${EDLNedl}&mitemid=${mitemid}&userid=${userid}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const ftechPipelinePOs = async (mcid, whid, userid) => {
  try {

    const response = await api.get(`/HO/getPipelineDDL?mcid=${mcid}&whid=${whid}&userid=${userid}`);
    // alert("Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const ftechPipelinePOsTransit = async (mcid, whid, userid) => {
  try {

    const response = await api.get(`/HO/getPipelineDDLTransit?mcid=${mcid}&whid=${whid}&userid=${userid}`);
    // alert("Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};



export const ftechPipelinePODetails = async (ponoid, itemid, mcid, whid, userid) => {
  try {

    const response = await api.get(`/HO/getPipelineDetails?ponoid=${ponoid}&itemid=${itemid}&mcid=${mcid}&whid=${whid}&userid=${userid}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const ftechItemWHStock = async (itemid) => {
  try {

    const response = await api.get(`/PublicReport/ItemWHStock?mitemid=${itemid}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const fetchMasitems = async (itemid, mcid, edl, groupid, itemtypeid, edlcat) => {
  try {

    const response = await api.get(`/Master/Masitems?itemid=${itemid}&mcid=${mcid}&edl=${edl}&groupid=${groupid}&itemtypeid=${itemtypeid}&edlcat=${edlcat}`);
    //alert("fetchMasitems Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const fetchGroupName = async (AllGroup, itemid) => {
  try {

    const response = await api.get(`Master/getGroupName?AllGroup=${AllGroup}&mcid=${itemid}`);
    //alert("fetchMasitems Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const fetchDistwiseIssuance = async (itemid, yearid, hodid, startDT, endDT) => {
  try {
    // alert(`/PublicReport/DistwiseIssuance?itemid=${itemid}&yearid=${yearid}&hodid=${hodid}&startDT=${startDT}&endDT=${endDT}`);
    // console.log(`/PublicReport/DistwiseIssuance?itemid=${itemid}&yearid=${yearid}&hodid=${hodid}&startDT=${startDT}&endDT=${endDT}`);
    const response = await api.get(`/PublicReport/DistwiseIssuance?itemid=${itemid}&yearid=${yearid}&hodid=${hodid}&startDT=${startDT}&endDT=${endDT}`);
    // alert("fetchMasitems Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const fetchFacwiseIssuance = async (itemid, yearid, Para, startDT, endDT, facid) => {
  try {
    //alert('inside fetchFacwiseIssuance');
    // alert(`/PublicReport/FacwiseIssuance?itemid=${itemid}&yearid=${yearid}&Para=${Para}&startDT=${startDT}&endDT=${endDT}&facid=${facid}`);
    // alert(`/PublicReport/FacwiseIssuance?itemid=${itemid}&yearid=${yearid}&Para=${Para}&startDT=${startDT}&endDT=${endDT}&facid=${facid}`);
    const response = await api.get(`/PublicReport/FacwiseIssuance?itemid=${itemid}&yearid=${yearid}&Para=${Para}&startDT=${startDT}&endDT=${endDT}&facid=${facid}`);
    //alert("fetchMasitems Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const fetchFACwiseStockoutPostion = async (ftype, facid, mcatid, EDLNedl, mitemid, userid) => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/District/FACwiseStockPostion?ftype=${ftype}&facid=${facid}&mcatid=${mcatid}&EDLNedl=${EDLNedl}&mitemid=${mitemid}&userid=${userid}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchOPDCountTotal = async (disid, coll_cmho, userid, facid, hodid, daypara, rpttype) => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/T4Reports/OPDCountTotal?disid=${disid}&coll_cmho=${coll_cmho}&userid=${userid}&facid=${facid}&hodid=${hodid}&daypara=${daypara}&rpttype=${rpttype}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchAllDoctor = async (Isall, userid, facid, distid, coll_cmho) => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/T4Reports/getAllDoctor?Isall=${Isall}&userid=${userid}&facid=${facid}&distid=${distid}&coll_cmho=${coll_cmho}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const DrCountTotalData = async (disid, coll_cmho, userid, facid, hodid, daypara, rpttype, drid) => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/T4Reports/DrCountTotal?disid=${disid}&coll_cmho=${coll_cmho}&userid=${userid}&facid=${facid}&hodid=${hodid}&daypara=${daypara}&rpttype=${rpttype}&drid=${drid}`);
   // alert("DrCountTotalData: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchFacilityMCUser = async (hod, disid, factypeid, whid, facid, userid,coll_cmho) => {
  try {

    const response = await api.get(`Master/MasfacilityInfoUser?hod=${hod}&disid=${disid}&factypeid=${factypeid}&whid=${whid}&facid=${facid}&userid=${userid}&coll_cmho=${coll_cmho}`);
   //alert('fetchFacilityMCUser :' + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const fetchDiagnosysCount = async (disid, coll_cmho, userid, facid, hodid, daypara, rpttype, diagnosysId) => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/T4Reports/DiagnosysCount?disid=${disid}&coll_cmho=${coll_cmho}&userid=${userid}&facid=${facid}&hodid=${hodid}&daypara=${daypara}&rpttype=${rpttype}&diagnosysId=${diagnosysId}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDistFacwisestockIssuance = async (itemid, hodid, distid, facilityid, userid, coll_cmho) => {
  try {
    //alert(`inside fetchdhsDmeYearConsumption`);   
    const response = await api.get(`/HO/getfacwiseSTockIssuanceCoonsumptionm?itemid=${itemid}&hodid=${hodid}&distid=${distid}&facilityid=${facilityid}&userid=${userid}&coll_cmho=${coll_cmho}`);
    //alert(`inside fetchdhsDmeYearConsumption` + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};
//getfacwiseSTockIssuanceCoonsumptionm(string itemid, string hodid, string distid, string userid, string coll_cmho)

export const fetchInTransitProgress = async (whid, whsup) => {
  try {
    //alert("inside fetchInTransitProgress");
    const response = await api.get(`/Master/MasRecRemarks?whid=${whid}&whsup=${whsup}`);
    //alert("fetchInTransitProgress Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const insertTblRecvProgress = async (remid, remarks, ponoid, whid) => {
  try {
    //alert("inside insertTblRecvProgress" + `/HO/insertTblRecvProgress?remid=${remid}&remarks=${remarks}&ponoid=${ponoid}&whid=${whid}`);
    const response = await api.post(`/HO/insertTblRecvProgress?remid=${remid}&remarks=${remarks}&ponoid=${ponoid}&whid=${whid}`);
    //alert("insertTblRecvProgress Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const fetchIntransitIssues = async (whid, userid, remid) => {
  try {
    //alert(`inside fetchdhsDmeYearConsumption`);   
    const response = await api.get(`/HO/WHInTransitReason?whid=${whid}&userid=${userid}&remid=${remid}`);
    // alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const ftechRecRemarksWithIssues = async (AllGroup, whid, whsup, userid) => {
  try {

    const response = await api.get(`/Master/MasRecRemarksWithIssues?AllGroup=${AllGroup}&whid=${whid}&whsup=${whsup}&userid=${userid}`);
    // alert("Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const insertTBLRECVPROGRESSHOREMARKS = async (progressid, remid, horemarks, houserid) => {
  try {
    //  alert("Inside API progressid:"+progressid+" remid:"+remid+"horemarks:"+horemarks+"houserid:"+houserid);
    //alert("inside insertTblRecvProgress" + `/HO/insertTblRecvProgress?remid=${remid}&remarks=${remarks}&ponoid=${ponoid}&whid=${whid}`);
    const response = await api.post(`/HO/insertTBLRECVPROGRESSHOREMARKS?progressid=${progressid}&remid=${remid}&horemarks=${horemarks}&houserid=${houserid}`);
    //alert("insertTblRecvProgress Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const fetchPendingToPick = async (whid) => {
  try {

    const response = await api.get(`/Courier/GetPendingToPick?warehouseid=${whid}`);
    // alert("Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const fetchPendingToDrop = async (whid) => {
  try {

    const response = await api.get(`/Courier/GetPendingToDrop?warehouseid=${whid}`);
    // alert("Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const fetchItemDetailDDL = async () => {
  try {

    const response = await api.get(`/Courier/ItemDetailDDL`);
    // alert("Response: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const GetPendingToPickByItem = async (itemId) => {
  try {
    //alert(`/Courier/GetPendingToPickByItem?itemId=${itemId}`);
    const response = await api.get(`/Courier/GetPendingToPickByItem?itemId=${itemId}`);
    alert("Response Pending to Pick: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const GetPendingToDropByItem = async (itemId) => {
  try {

    const response = await api.get(`/Courier/GetPendingToDropByItem?itemId=${itemId}`);
    alert("Response Pending to Drop: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const GetPendingToSendToLab = async (itemId) => {
  try {

    const response = await api.get(`/Courier/GetPendingToSendToLab?itemId=${itemId}`);
    alert("Response Pending to Send: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

// export const GetPendingToReceiptInHO = async (itemId) => {
//   try {

//     const response = await api.get(`/Courier/GetPendingToReceiptInHO?itemId=${itemId}`);
//     alert("Response Pending to Receipt: " + JSON.stringify(response.data));
//     return response.data;
//   }
//   catch (error) {
//     throw error;
//   }
// };


export const GetPendingToReceiptInLab = async (itemId) => {
  try {
    //alert(`/Courier/GetPendingToReceiptInLab?itemId=${itemId}`)
    const response = await api.get(`/Courier/GetPendingToReceiptInLab?itemId=${itemId}`);
    alert("Response Pending to Receipt: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};



export const GetUnderLabSinceXdaysWithinTimeline = async (itemId) => {
  try {

    const response = await api.get(`/Courier/GetUnderLabSinceXdaysWithinTimeline?itemId=${itemId}`);
    alert("Response Within Timeline: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const GetUnderLabSinceXdaysOutOfTimeline = async (itemId) => {
  try {

    const response = await api.get(`/Courier/GetUnderLabSinceXdaysOutOfTimeline?itemId=${itemId}`);
    alert("Response Out of Timeline: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};

export const GetFinalStatusPendingInHOQC = async (itemId) => {
  try {

    const response = await api.get(`/Courier/GetFinalStatusPendingInHOQC?itemId=${itemId}`);
    alert("Response Pending in HO QC: " + JSON.stringify(response.data));
    return response.data;
  }
  catch (error) {
    throw error;
  }
};


export const DdlItemWiseInHandQty = async (distId) => {
  try {
    //alert(`/District/DdlItemWiseInHandQty?distId=${distId}`);
    const response = await api.get(`/District/DdlItemWiseInHandQty?distId=${distId}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const ItemWiseInHandQtyDetail = async (itemId, DistId) => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/District/ItemWiseInHandQtyDetail?itemId=${itemId}&DistId=${DistId}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetItemQty = async (isEDL, mcid, districtId) => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/District/GetItemQty?isEDL=${isEDL}&mcid=${mcid}&districtId=${districtId}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const ddlMasreagenteqp = async () => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/Reagent/ddlMasreagenteqp`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getWHreagentStock = async (pmachineid) => {
  try {
    //string ftype,string facid,string mcatid, string EDLNedl, string mitemid, string userid
    const response = await api.get(`/Reagent/getWHreagentStock?pmachineid=${pmachineid}`);
    //alert("Response: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    throw error;
  }
};





// You can define more API functions here
// export const fetchOtherData = async () => { ... };
