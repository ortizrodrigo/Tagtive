import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { styles as eventStyles } from "@/styles/events";

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddEvent: (event: {
    title: string;
    date: string;
    time: string;
    location: string;
  }) => void;
};

export const EventModal = ({
  isOpen,
  onClose,
  onAddEvent,
}: EventModalProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const colorScheme = useColorScheme() ?? "light";

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const snapPoints = useMemo(() => ["90%"], []);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index < 0) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.dismiss();
    }
  }, [isOpen]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={onClose}
      />
    ),
    [onClose]
  );

  const handleAddEvent = () => {
    if (title && date && time && location) {
      onAddEvent({ title, date, time, location });
      setTitle("");
      setDate("");
      setTime("");
      setLocation("");
    }
  };

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={isOpen ? 0 : -1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
      backgroundStyle={{ backgroundColor: Colors[colorScheme].background }}
    >
      <BottomSheetView style={eventStyles.modalContent}>
        <Text
          style={[eventStyles.headerTitle, { color: Colors[colorScheme].text }]}
        >
          Add Event
        </Text>
        <View style={modalStyles.form}>
          <TextInput
            style={[
              modalStyles.input,
              {
                color: Colors[colorScheme].text,
                borderColor: Colors[colorScheme].icon,
              },
            ]}
            placeholder='Event Title'
            placeholderTextColor={Colors[colorScheme].text}
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[
              modalStyles.input,
              {
                color: Colors[colorScheme].text,
                borderColor: Colors[colorScheme].icon,
              },
            ]}
            placeholder='Date (e.g., 01/05/25)'
            placeholderTextColor={Colors[colorScheme].text}
            value={date}
            onChangeText={setDate}
          />
          <TextInput
            style={[
              modalStyles.input,
              {
                color: Colors[colorScheme].text,
                borderColor: Colors[colorScheme].icon,
              },
            ]}
            placeholder='Time (e.g., 8:00 PM)'
            placeholderTextColor={Colors[colorScheme].text}
            value={time}
            onChangeText={setTime}
          />
          <TextInput
            style={[
              modalStyles.input,
              {
                color: Colors[colorScheme].text,
                borderColor: Colors[colorScheme].icon,
              },
            ]}
            placeholder='Location'
            placeholderTextColor={Colors[colorScheme].text}
            value={location}
            onChangeText={setLocation}
          />
          <TouchableOpacity
            style={[
              modalStyles.button,
              { backgroundColor: Colors[colorScheme].tagtivePrimary },
            ]}
            onPress={handleAddEvent}
          >
            <Text style={modalStyles.buttonText}>Add Event</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose}>
            <Text style={{ color: Colors[colorScheme].tagtiveAccent }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const modalStyles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
