import React from 'react';

import { Form, Input } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Text from '~/components/UI/Text';
// import { useAuth } from '~/store/auth/useAuth';

import styles from './index.module.scss';

function SignIn () {
  return (
    <>
      <Helmet>
        <title>
          Sign In
        </title>
      </Helmet>

      <div className={styles.loginWrap}>
        <img alt='logo'
          src={'images/logo.png'}
        />

        <Text className='mb-20 text-center text-[red]'
          element='h1'
          type='heading3-bold'
        >
          Đăng nhập
        </Text>

        <Form layout='vertical'>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email',
              },
              {
                type: 'email',
                message: 'Email không hợp lệ',
              },
            ]}
          >
            <Input placeholder='Nhập email' />
          </Form.Item>

          <Form.Item
            label='Mật khẩu'
            name='password'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              {
                min: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự',
              },
            ]}
          >
            <Input placeholder='Mật khẩu' />
          </Form.Item>

          <Text className='mb-20 text-right'
            color='primary-light'
            type='heading5-regular'
          >
            <Link to='/forgot-password'>
              Quên mật khẩu?
            </Link>
          </Text>

        </Form>
      </div>
    </>
  );
}

export default SignIn;
