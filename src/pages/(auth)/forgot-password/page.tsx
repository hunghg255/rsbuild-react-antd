import React from 'react';

import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import ButtonPrimary from '~/components/UI/Button/ButtonPrimary';
import { Icon } from '~/components/UI/IconFont/Icon';
import Text from '~/components/UI/Text';

import styles from './index.module.scss';

export function Component() {
  return (
    <div className={styles.loginWrap}>
      <img alt='logo'
        src='public/svg/logo.svg'
      />

      <Text className='mb-20 text-center'
        element='h1'
        type='heading3-bold'
      >
        Quên mật khẩu
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

        <ButtonPrimary className='mb-20'
          htmlType='submit'
        >
          Đăng nhập
        </ButtonPrimary>

        <Text className='flex-center'
          color='cblack'
          type='heading5-regular'
        >
          <Link to='/sign-in'>
            <Icon icon='t4font-ic-eva_arrow-ios-back-fill' />
            {' '}
            Quay lại đăng nhập
          </Link>
        </Text>
      </Form>
    </div>
  );
}
