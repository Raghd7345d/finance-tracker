import { Timestamp } from "firebase/firestore";
import { Password } from "phosphor-react-native";
import React, { ReactNode } from "react";

import {
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

export type ScreenWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
};
export type ModelWrapperProps = {
  style?: ViewStyle;
  children: React.ReactNode;
  bg?: string;
};
export type accountOptionType = {
  tiltle: string;
  icon: string;
  bgColor: string;
  routeName?: any;
};
export interface InputProps extends TextInputProps {
  icon: React.ReactNode;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputRef?: React.RefObject<TextInput>;
}
export interface CustomButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  style?: ViewStyle;
  loading?: boolean;
  children: React.ReactNode;
}
export type BackButtonProps = {
  style?: ViewStyle;
  iconSize?: number;
};
export type TypoProps = {
  size?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: TextStyle["fontWeight"];
  lineHeight?: number;
  children: any | null;
  textprops?: any;
  style?: TextStyle;
};

export type IconComonent = React.ComponentType<{
  name: string;
  size: number;
  color: string;
  width?: number;
  height?: number;
  fill?: string;
  strokeWidth?: number;
}>;

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
  stroleWidth?: number;
  fill?: string;
};
export type HeaderProps = {
  title: string;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
};
export type UserType = {
  uid?: string;
  email?: string | null;
  name: string | null;
  image?: any;
} | null;
export interface Transaction {
  description: string;
  amount: number;
  category: string;
  timestamp: Timestamp;
}

export type UserDataType = {
  name: string;
  image?: any;
};
export type AuthContextType = {
  user: UserType;
  setUser: Function;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; msg?: string }>;
  signUp: (
    email: string,
    password: string,
    name: string
  ) => Promise<{ success: boolean; msg?: string }>;
  updateUserData: (userId: string) => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; msg?: string }>;
};
