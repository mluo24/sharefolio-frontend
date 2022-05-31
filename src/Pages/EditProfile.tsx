import Form from '../../node_modules/@rjsf/material-ui/dist/v5' // maybe figure out a way to fix this
import {JSONSchema7} from "json-schema"
import {useSelector} from "react-redux";
import {RootState} from "../store";
import {ISubmitEvent} from "@rjsf/core";
import {useEffect, useState} from "react";
import axios from "axios";
import {UserProfileType} from "../Types/PageProps";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {
  const account = useSelector((state: RootState) => state.auth.account);
  const navigate = useNavigate()
  const [profile, setProfile] = useState<UserProfileType>()

  useEffect(() => {
    axios
      .get(`/api/users/${account?.id}/userprofile/${account?.userprofile}/`)
      .then((res) => {
        console.log(res.data)
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const onSubmit = (e: ISubmitEvent<any>) => {
    axios.put(`/api/users/${account?.id}/userprofile/${account?.userprofile}/`, e.formData).then(() => {
      axios.put(`/api/users/${account?.id}/`, {
        username: account?.username,
        first_name: e.formData.first_name,
        last_name: e.formData.last_name
      }).then((res) => {
        console.log(res.data)
        navigate('/profile')
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  const schema: JSONSchema7 = {
    "title": "Edit Profile",
    "type": "object",
    "required": [
      "first_name",
      "last_name",
    ],
    "properties": {
      "first_name": {
        "type": "string",
        "title": "First name",
        "default": account?.first_name
      },
      "last_name": {
        "type": "string",
        "title": "Last name",
        "default": account?.last_name
      },
      "location": {
        "type": "string",
        "title": "Location",
        "default": profile?.location
      },
      "birth_date": {
        "type": "string",
        "title": "Birthday",
        "default": profile?.birth_date
      },
      "bio": {
        "type": "string",
        "title": "Bio",
        "default": profile?.bio
      },

    }
  }

  const uiSchema = {
    "bio": {
      "ui:widget": "textarea",
    },
    "birth_date": {
      "ui:widget": "date"
    }
  }

  return (<Form schema={schema} uiSchema={uiSchema} onSubmit={onSubmit}/>)
}
export default EditProfile