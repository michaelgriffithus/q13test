import React, { Component } from "react";

class Tester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      previousResponses: [
        {
          responses: [
            {
              question: "5b7f6bae-4cf2-bc05-5c08-e732b76dafbc",
              response: "good"
            },
            {
              response: "A",
              question: "9bd45eb1-0693-e737-5ce3-8fc559a518ee"
            }
          ],
          surveyId: "IRbsfLbaeSpsAItVhMiy",
          questionnaireId: "6uxOuwjGY05ArSE94QtD",
          participantId: "55555",
          isNew: false,
          profile: "Jennifer",
          respondDate: {
            seconds: 1596640814,
            nanoseconds: 859000000
          },
          id: "XNiz0yOiI1UPq7wgT6Ni",
          complete: true
        },
        {
          responses: [
            {
              question: "25fb65f0-1aa7-df6a-a869-5cf601e255a1",
              response: "Like a king"
            }
          ],
          surveyId: "IRbsfLbaeSpsAItVhMiy",
          questionnaireId: "xliVOmh0JNNPPKgo9uoX",
          participantId: "55555",
          isNew: false,
          profile: "Jennifer",
          respondDate: {
            seconds: 1596725695,
            nanoseconds: 352000000
          },
          id: "iZZ9XW58UsQ5HOWNTxae",
          complete: false
        },
        {
          responses: [
            {
              question: "5b7f6bae-4cf2-bc05-5c08-e732b76dafbc",
              response: "good"
            }
          ],
          surveyId: "IRbsfLbaeSpsAItVhMiy",
          questionnaireId: "6uxOuwjGY05ArSE94QtD",
          participantId: "55555",
          isNew: false,
          profile: "Bunny",
          respondDate: {
            seconds: 1592507346,
            nanoseconds: 418000000
          },
          id: "j3mU2D52WaDe8Uvwb332"
        }
      ]
    };
  }
  handleChange = (event) => {
    const { id, value } = event.target;
    const { answers } = this.state;
    this.setState({
      submission: [],
      answers: {
        ...answers,
        [id]: value
      }
    });
  };

  handleSubmit = (e) => {
    const { answers, previousResponses } = this.state;
    //alert(JSON.stringify(answers));
    const data = this.initalizeQuestionnaire(answers, previousResponses);
    alert(JSON.stringify(data));
    this.setState({ submission: data });
  };

  initalizeQuestionnaire = (target, participantResponse) => {
    debugger;
    let responses = [];
    let previousAnswers = participantResponse.find((item) => {
      const { surveyId, questionnaireId } = target;
      return (
        surveyId === item.surveyId &&
        questionnaireId === item.questionnaireId &&
        target.participantId === item.participantId &&
        item.profile === target.profileName
      );
    });
    if (previousAnswers) {
      responses = previousAnswers.responses;
    }
    return responses;
  };

  render() {
    const { previousResponses, answers, submission } = this.state;

    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          SurveyID:
          <input id="surveyId" onChange={(e) => this.handleChange(e)} />
          <br />
          QuestionnaireId:
          <input id="questionnaireId" onChange={(e) => this.handleChange(e)} />
          <br />
          ParticipantId:
          <input id="participantId" onChange={(e) => this.handleChange(e)} />
          <br />
          Profile:
          <input id="profile" onChange={(e) => this.handleChange(e)} />
          <br />
          <textarea
            readOnly
            rows={30}
            cols={60}
            value={JSON.stringify(previousResponses)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        {JSON.stringify(answers)}
        <textarea rows={30} cols={60} value={JSON.stringify(submission)} />
      </>
    );
  }
}

export default Tester;
