
import { Button, Card, Checkbox, Form, Input, Typography } from 'antd';

const LoginLayout = (props: any) => {

    const { LoginForm,
        handleOnSubmit,
        registerClick
    } = props;

    const { Text } = Typography
    return (

        <Card className='flex items-center justify-center w-full h-full'>
            <Form
                name='login'
                form={LoginForm}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={handleOnSubmit}

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
                        Sign In
                    </Button>
                </Form.Item>
                <div onClick={registerClick}>
                    <Text> Sign up now </Text>
                </div>
            </Form>
        </Card>
    )
}

export default LoginLayout
