export default interface IbusinessModel{
    businessModel: string
    mainData: {
        capitalForInstallation:{
            value: number
            isFixed: boolean
        }
        workingCapital: {
            value: number
            isFixed: boolean
        }
        FranchiseFee: {
            value: number
            isFixed: boolean
        }
    }
    technicalData:{
        advertisingFee: {
            value: number
            fixed: boolean
        }
        royalties: {
            value: number
            fixed: boolean
        }
        storeArea: {
            from: number 
            until: number
            DoesNotContain: boolean
        }
       
    }
}
