<script>
  import Icon from '@iconify/svelte';
  import { pb, uaccount } from '$lib/pocketbase'
  console.log($uaccount)
</script>

<div class="navbar bg-base-100 shadow-xl rounded-b-md">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">AI Oops</a>
  </div>
  <div class="flex-none flex space-x-3">
    {#if $uaccount}
    <a href="/submit" class="btn bg-glass ">Submit</a>
    <div class="dropdown dropdown-end">
      <label tabindex="-1" class="btn btn-ghost btn-circle avatar">
        <Icon icon="ph:robot-fill" height=40/>
      </label>
      <ul tabindex="-1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="#">Welcome {$uaccount?.email}</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
    {:else}
    <a href="/login" class="btn bg-ghost">Login</a>
    {/if}
  </div>
</div>