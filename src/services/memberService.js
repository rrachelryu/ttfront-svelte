const baseurl = 'http://localhost:8080/api/v1/members'

export const loadMembers = () => {
  return fetch(baseurl).then((res) => res.json())
}
