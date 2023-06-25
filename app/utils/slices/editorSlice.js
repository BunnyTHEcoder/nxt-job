import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "<p><strong>About this job</strong></p><p><br></p><p>Are you passionate about UI/UX design and eager to gain hands-on experience working with a prestigious Management Consulting firm? TalentKompass Deutschland, a top Human Resources company based in Germany, is searching for a motivated UI/UX Design Intern to join our esteemed client. This remote position offers an extraordinary chance for someone who is excited to learn and develop their skills in a dynamic and fast-paced environment.As a UI/UX Design Intern, you will work closely with the consulting and design teams, where you will be responsible for a range of tasks, including user research, wireframing, prototyping, and usability testing. You will have the unique opportunity to learn from experienced professionals who will provide mentorship and guidance throughout the internship. With this internship, you will gain valuable experience in UI/UX design, design thinking, and teamwork – all essential skills for a successful career in this field.Responsibilities:Assist in the research, design, and prototyping of user interfaces and experiences Conduct user research and develop personas, user stories, and user flowsCreate wireframes, mockups, and prototypes to effectively communicate design ideas Collaborate with cross-functional teams to gather requirements and develop solutions Participate in usability testing and incorporate feedback into design iterations Support the team with general administrative tasks as needed Contribute to the creation of design documentation and style guides Requirements: Basic understanding of UI/UX design principles and practices Familiarity with design tools, such as Sketch, Adobe XD, Figma is a plus Excellent written and verbal communication skills in English Ability to work independently and as part of a team Strong analytical and problem-solving skills Knowledge of web and mobile design best practices is a plus with user research methodologies and usability testing is a plus At TalentKompass Deutschland, we are committed to helping our interns develop their skills and reach their full potential. Our client is a reputable Management Consulting firm that will provide invaluable experience in a competitive industry. Don't miss this incredible opportunity to kick-start your career in UI/UX design.</p><p><br></p>",
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    updateEditor: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const selectEditor = (state) => state.editor.data;
export const { updateEditor } = editorSlice.actions;

export default editorSlice.reducer;
