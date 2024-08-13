/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Divider, useDisclosure } from '@chakra-ui/react';
import { formattedNumber } from '../../../../../utils/format-number';
import DialogMessage from '../../../../../components/core/DialogMessage';
import FormCreateFeedback from '../ProfileFormCreateFeedback';
import useProducerDataUser from '../../../../../useCustom/user/useProducerDataUser';
import { useNavigate } from 'react-router-dom';

const ProfileProductCard = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dataUser } = useProducerDataUser();
  const navigate = useNavigate();
  if (_.isEmpty(item)) {
    return null;
  }

  return (
    <div>
      <div className="flex gap-6 ">
        <DialogMessage isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          <FormCreateFeedback
            slug={item.products.product_slug}
            id_product={item.id_product}
            id_user={dataUser.id}
          ></FormCreateFeedback>
        </DialogMessage>
        <img
          className="w-[150px] h-[150px] object-cover"
          src={item.products.product_image}
          alt={item.products.product_name}
        />
        <div className="flex flex-col gap-6">
          <h5
            onClick={() => {
              navigate(
                `/detail?slug=${item.products.product_slug}&id=${item.products.id}`
              );
            }}
            className="hover:text-blue-500 hover:underline hover:cursor-pointer"
          >
            {item.products.product_name}
          </h5>
          <div className="flex gap-5">
            <div className="">
              Số lượng đã đặt:{' '}
              <span className="text-blue-500">
                {formattedNumber(item.quantity)}
              </span>
            </div>
            <div className="">
              Đơn giá:{' '}
              <span className="text-red-600">
                {formattedNumber(item.products.unit_prices)} VND
              </span>
            </div>
            <div className=" ">
              Tổng giá:{' '}
              <span className="text-green-600">
                {formattedNumber(item.quantity * item.products.unit_prices)} VND
              </span>
            </div>
          </div>
          <Button
            onClick={onOpen}
            fontWeight={'bold'}
            w={100}
            // color={'white'}
            // backgroundColor={'blue'}
          >
            Đánh giá
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileProductCard;
