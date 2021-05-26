import { Button, Flex, Input, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AlertPop from '../components/AlertPop';
import Stats from '../components/Stats';

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState();

  const toast = useToast();

  const onSubmit = userInfo => {
    toast({
      title: 'Submitted!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    setData(userInfo);
  };

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      mt="4"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            {...register('firstName', {
              required: 'Please enter your first name',
            })}
          />
          {errors.firstName && <AlertPop title={errors.firstName.message} />}
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            {...register('lastName', {
              required: 'Please enter your last name',
            })}
          />
          {errors.lastName && <AlertPop title={errors.lastName.message} />}
          <Input
            type="password"
            placeholder="Your password"
            {...register('password', {
              required: 'Please enter Password',
              minLength: { value: 8, message: 'Too short' },
            })}
          />
          {errors.password && <AlertPop title={errors.password.message} />}
          <Button
            borderRadius="md"
            bg="cyan.600"
            _hover={{ bg: 'cyan.200' }}
            variant="ghost"
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </form>
      {data && <Stats {...data} />}
    </Flex>
  );
}
