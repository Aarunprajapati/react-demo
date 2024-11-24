
import { Button, Checkbox, Form, Input, Typography } from 'antd';

const Registerlayout = (props: any) => {

    const { loginClick } = props

    const { Text } = Typography
    return (

        <div className='flex items-center justify-center w-full h-screen'>

            <Form
                name='login'
                // form={LoginForm}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                // onFinish={handleOnSubmit}

                autoComplete="off"

            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder='Enter your email' />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='enter your password' />
                </Form.Item>

                <Form.Item
                    name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit" >
                        Signup
                    </Button>
                </Form.Item>
                <div onClick={loginClick}>
                    <Text> Sign In </Text>
                </div>
            </Form>
        </div>
    )
}

export default Registerlayout
