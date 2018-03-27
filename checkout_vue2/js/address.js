var vm = new Vue({
	el:'.address',
	data:{
		addressList:[],
		limitNum:3,
		currentIndex:0,
		shipFlag:1
	},
	mounted:function(){
		this.$nextTick(function(){
			this.getAddressList();
		});
	},
	computed:{
		filterAddress:function(){
			console.info(9999);
			console.info(vm);
			return this.addressList.slice(0,this.limitNum);
		}
	},
	methods:{
		getAddressList:function(){
			var _this = this;
			this.$http.get('data/address.json').then(function(response){
				var res = response.data;
				console.log(res);
				if(res.status == '0'){
					_this.addressList = res.result;
				}
			});
		},
		setDefault:function(addressId){
			this.addressList.forEach(function(address,index){
				if(address.addressId == addressId){
					address.isDefault=true;
				}else{
					address.isDefault=false;
				}
			});
		}
	}
});