import { View, Text, Pressable, StyleSheet } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";

const TaskItem = ({
  completed,
  text,
  onToggleComplete,
  onPressEdit,
  onPressDelete,
}) => {
  const cardStyles = [styles.card];

  if (completed) {
    cardStyles.push(styles.carCompleted);
  }

  return (
    <View style={cardStyles}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onPressEdit}>
        <IconPencil />
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <IconTrash />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#98a0a8",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    gap: 8,
  },
  carCompleted: {
    backgroundColor: "#0f725c",
  },
  text: {
    flex: 1,
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TaskItem;
