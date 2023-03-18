const baseurl = 'http://localhost:8080/api/v1/members'

export const loadMembers = () => {
  return fetch(baseurl).then((res) => res.json())
}
export const createMember = (member) => {
  return fetch(baseurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(member),
  }).then((res) => res.json())
}

export const updateMember = (member) => {
  return fetch(`${baseurl} + '/' + ${member.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(member),
  }).then((res) => res.json())
}

export const deleteMember = (member) => {
  return fetch(`${baseurl}/${member.id}`, {
    method: 'DELETE',
    headers: {
      'Conetent-Type': 'application/json',
    },
    body: JSON.stringify(member),
  }).then((res) => res.json())
}
