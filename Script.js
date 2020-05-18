function eat_cake(str){
    var mNm = "";
    var mNm2 = "";
    var mNm3 = "";
    var num = 0;
    if(str.length % 2 != 0){
        mNm = str.substring(0,str.length/2 +0.5);
        mNm2 = str.substring(str.length/2 +0.5, str.length);
    }else{
        mNm = str.substring(0,str.length/2);
        mNm2 = str.substring(str.length/2, str.length);
    }
    for(var i = 0; i < mNm2.length; i++) {
        if (mNm2.substring(i, i +1) == mNm.substring(0, 1)) {
            num = 0;
            for(var y = i; y < mNm2.length; y++){
                if(mNm2.substring(y, y +1) == mNm.substring(num, num +1)){

                } else {
                    break;
                }
                num++;
                if(y == mNm2.length -1){
                    mNm3 = mNm.substring(0, num);
                }
            }
        }
    }
    if(mNm3 == ""){
        return 1;
    }
    return str.length/mNm3.length;
}



