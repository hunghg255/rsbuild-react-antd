import React from 'react';

import { Form, Input } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import ButtonPrimary from '@/components/UI/Button/ButtonPrimary';
import { Icon } from '@/components/UI/IconFont/Icon';
import Text from '@/components/UI/Text';
// import { useAuth } from '@/store/auth/useAuth';

import styles from './index.module.scss';
import img from '../../../public/images/logo.png?url';

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <h1>{process.env.TITLE}</h1>
      <Icon icon='t4font-ic-sun' />
      <div className={styles.loginWrap}>
        <img src={'images/logo.png'} alt='logo' />
        <img src={img} alt='logo' />
        <Text type='heading3-bold' className='text-center mb-20' element='h1'>
          Đăng nhập vào IC Pusblisher
        </Text>
        <Form layout='vertical'>
          <Form.Item
            name='email'
            label='Email'
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
            name='password'
            label='Mật khẩu'
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

          <Text type='heading5-regular' color='primary-light' className='mb-20 text-right'>
            <Link to='/forgot-password'>Quên mật khẩu?</Link>
          </Text>

          <ButtonPrimary htmlType='submit'>Đăng nhập</ButtonPrimary>
        </Form>
      </div>
    </>
  );
};

export default SignIn;
