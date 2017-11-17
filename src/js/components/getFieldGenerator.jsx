{getFieldDecorator('nickname', {
            rules: [{
              required: this.state.checkNick,
              message: 'Please input your nickname',
            }],

          }) (
            	<Input placeholder="Please input your nickname" />
			 )
}

{
	getFieldDecorator('nickname', {
		rules: [{
			required: this.state.checkNick,
			message: '输入内容不能为空！'，
		}]，

	}) (<Input placeholder="请输入你的昵称" />)
}