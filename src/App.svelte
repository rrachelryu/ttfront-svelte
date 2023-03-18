<script>
  import { onMount } from 'svelte'

  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import list from './components/memList.svelte'
import {member} from './services/store'
  import { createMember, loadMembers } from './services/memberService'
  onMount(async() => {
    console.log('-----mounte-----')
    member.set(await loadMembers())
    console.log('------'+member)
  })

  const getMember = async() => {
    return await loadMembers()
  }

  const submitMember = async(member) => {
    await createMember(member)
    member.set(await loadMembers())
  }

  const updateMember = async(member) => {
    let updateMember = { ...member, completed: !member.completed}
    console.log(updateMember)
    await updateMember(updateMember)
    member.set(await loadMembers())
  }
</script>

<main>
  <h2>Together Travle</h2>
  <list />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 340px;
    margin: 0 auto;
  }
  @media (min-width: 640px){
    main {
      max-width: none;
    }
  }
</style>
