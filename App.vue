<script>
export default {
	onShow() {
		if (!this.$store.state.userId && !localStorage.getItem('userData')) {
			uni.navigateTo({
				url: '/pages/register/register'
			})
		} else {
			this.$store.commit('login', JSON.parse(localStorage.getItem('userData')))
			uni.switchTab({
			    url: '/pages/index/index'
			})
		}
	}
};
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import url('/static/styles/iconfont.css');
/*每个页面公共css */
.flex {
	display: flex;
	justify-content: space-between;
}
.iflex {
	display: inline-flex;
}
.bx {
	box-sizing: border-box;
}
.bfc-o {
	overflow: hidden;
	position: relative;
}
.bfc-d {
	display: inline-block;
	vertical-align: top;
	position: relative;
}
.bfc-p {
	position: absolute;
}
.fl {
	float: left;
	position: relative;
}
.fr {
	float: right;
	position: relative;
}
.al {
	text-align: left;
}
.ac {
	text-align: center;
}
.ar {
	text-align: right;
}
.tf,
.bf {
	position: fixed;
	width: 100%;
	left: 0;
	height: 50px;
	z-index: 99;
}
.tf {
	top: 0;
}
.bf {
	bottom: 0;
}
.toe {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.cp {
	cursor: pointer;
}
.cc {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	overflow: auto;
}
.slide-pad {
	padding: 0 30rpx;
}
.mask {
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(39, 39, 39, 0.76);
	left: 0;
	top: 0;
	margin: auto;
	z-index: 999;
}
</style>
